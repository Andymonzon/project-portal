import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  name: string;
  createdAt: string;
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
    initializeState: (_state, action: PayloadAction<Project[]>) => {
      return action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      const newState = [action.payload, ...state];
      localStorage.setItem("redux_project_state", JSON.stringify(newState));
      return newState;
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      const newState = state.filter((project) => project.id !== action.payload);
      localStorage.setItem("redux_project_state", JSON.stringify(newState));
      return newState;
    },
    editProject: (state, action: PayloadAction<Project>) => {
      const newState = state.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
      localStorage.setItem("redux_project_state", JSON.stringify(newState));
      return newState;
    },
    searchProjects: (_state, action: PayloadAction<string>) => {
      const storedProjects = JSON.parse(
        localStorage.getItem("redux_project_state") || "[]"
      ) as Project[];
      if (action.payload === "") {
        return storedProjects;
      }
      return storedProjects.filter((project) =>
        project.projectName.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export default projectSlice.reducer;

export const {
  addProject,
  deleteProject,
  editProject,
  searchProjects,
  initializeState,
} = projectSlice.actions;
