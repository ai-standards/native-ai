// Workspace management functionality
export class Workspace {
  private name: string;
  private projects: string[];

  constructor(name: string) {
    this.name = name;
    this.projects = [];
  }

  getName(): string {
    return this.name;
  }

  addProject(projectName: string): void {
    if (!this.projects.includes(projectName)) {
      this.projects.push(projectName);
    }
  }

  removeProject(projectName: string): void {
    const index = this.projects.indexOf(projectName);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }

  getProjects(): string[] {
    return [...this.projects];
  }

  getProjectCount(): number {
    return this.projects.length;
  }
}

export const createWorkspace = (name: string): Workspace => {
  return new Workspace(name);
};