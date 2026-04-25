import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string | null;
  imageUrl?: string | null;
}

export default function ProjectCard({ title, description, githubUrl, imageUrl }: ProjectCardProps) {
  return (
    <div className="card overflow-hidden">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
            <ExternalLink className="w-5 h-5" />
            <span className="text-sm font-medium">View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
