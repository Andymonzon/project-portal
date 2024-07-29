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

const initialState: Project[] = [];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      console.log(action.payload);
      state = [...state, action.payload];
      return state;
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state = state.filter((project) => project.id !== action.payload);
      return state;
    },
  },
});

export default projectSlice.reducer;

export const { addProject, deleteProject } = projectSlice.actions;
