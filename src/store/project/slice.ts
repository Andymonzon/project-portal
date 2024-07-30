import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  name: string;
  createdAt: Date;
  description: string;
  projectName: string;
  assignedTo: string;
  projectManager: string;
  status: string;
}

const initialState: Project[] = [];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    initializeState: (state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
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
    editProject: (state, action: PayloadAction<Project>) => {
      state = state.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
      localStorage.setItem("redux_project_state", JSON.stringify(state));
      return state;
    },
  },
});

export const loadStateFromLocalStorage = () => {
  return (dispatch: any) => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("redux_project_state");
      const state = storedState ? JSON.parse(storedState) : [];
      dispatch(projectSlice.actions.initializeState(state));
    }
  };
};

export default projectSlice.reducer;

export const { addProject, deleteProject, editProject } = projectSlice.actions;
