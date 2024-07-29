import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  description: string;
  projectName: string;
  asiggnedTo: string;
  projectManager: string;
  status: string;
}

const getState = () => {
  const state = localStorage.getItem("redux_project_state");
  return state ? JSON.parse(state) : [];
};

const initialState: Project[] = getState();

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state = [...state, action.payload];
      localStorage.setItem("redux_project_state", JSON.stringify(state));
      return state;
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state = state.filter((project) => project.id !== action.payload);
      localStorage.setItem("redux_project_state", JSON.stringify(state));
      return state;
    },
  },
});

export default projectSlice.reducer;

export const { addProject, deleteProject } = projectSlice.actions;
