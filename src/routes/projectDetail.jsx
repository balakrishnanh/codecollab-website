import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BubbleBackground from "../bubblebackground";
import READMEViewer from "../components/READMEViewer";
import { fetchReposForUser } from "../api/fetchprojects";
import { projectList } from "../data/projects";

const ProjectDetail = () => {
  const { owner, repo } = useParams({ strict: false });
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const configuredProject = useMemo(
    () =>
      projectList.find(
        item =>
          item.owner.toLowerCase() === owner.toLowerCase() &&
          item.repo.toLowerCase() === repo.toLowerCase()
      ),
    [owner, repo]
  );

  useEffect(() => {
    const fetchProject = async () => {
      if (!configuredProject) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const [repoData] = await fetchReposForUser(owner, [repo]);

        if (!repoData) {
          throw new Error("Project not found.");
        }

        setProject({
          ...repoData,
          owner,
          repo,
          demoImages: configuredProject.demoImages ?? [],
        });
      } catch (err) {
        setError(err?.message ?? "Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [configuredProject, owner, repo]);

  return (
    <div className="relative overflow-hidden">
      <BubbleBackground />
      <Navbar />

      <section className="min-h-screen px-6 py-16 relative z-20">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex mb-6 text-blue-700 hover:text-blue-900 font-medium"
          >
            ← Back to Projects
          </Link>

          {!configuredProject ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-3xl font-bold font-playfair mb-3 text-gray-900">Project Not Found</h1>
              <p className="text-gray-600">
                The requested project is not configured in this website yet.
              </p>
            </div>
          ) : loading ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg text-gray-700">Loading project details...</div>
          ) : error ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-3xl font-bold font-playfair mb-3 text-gray-900">Unable to Load Project</h1>
              <p className="text-red-700">{error}</p>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <header className="mb-8">
                <h1 className="text-4xl font-bold font-playfair text-gray-900 mb-3">
                  {project.name}
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  {project.description || "No description available for this project yet."}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold"
                >
                  <Github size={18} />
                  Open GitHub Repository →
                </a>
              </header>

              {project.demoImages?.length > 0 && (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold font-playfair mb-4 text-gray-900">
                    Demo Pictures
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.demoImages.map((imageSrc, index) => (
                      <img
                        key={`${imageSrc}-${index}`}
                        src={imageSrc}
                        alt={`${project.name} demo ${index + 1}`}
                        className="w-full h-56 object-cover rounded-lg border border-gray-200"
                      />
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-semibold font-playfair mb-4 text-gray-900">
                  README
                </h2>
                <READMEViewer owner={owner} repo={repo} />
              </section>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
