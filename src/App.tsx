import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Sidebar } from '@/components/layout/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { DashboardPage } from '@/pages/dashboard';
import { OrganizationPage } from '@/pages/organization';
import { OrganizationInfoPage } from '@/pages/organization/info';
import { NewOrganizationPage } from '@/pages/organization/new';
import { ProjectsPage } from '@/pages/projects';
import { NewProjectPage } from '@/pages/projects/new';
import { ProjectDetailsPage } from '@/pages/projects/details';
import { ProjectStagesPage } from '@/pages/projects/stages';
import { ProjectTimelinePage } from '@/pages/projects/timeline';
import { EmployeesPage } from '@/pages/employees';
import { EmployeeDetailsPage } from '@/pages/employees/details';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-muted/10 px-8 py-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/organization" element={<OrganizationPage />} />
              <Route
                path="/organization/new"
                element={<NewOrganizationPage />}
              />
              <Route
                path="/organization/info/:id"
                element={<OrganizationInfoPage />}
              />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/new" element={<NewProjectPage />} />
              <Route path="/projects/:id" element={<ProjectDetailsPage />} />
              <Route
                path="/projects/:id/stages"
                element={<ProjectStagesPage />}
              />
              <Route
                path="/projects/:id/timeline"
                element={<ProjectTimelinePage />}
              />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
