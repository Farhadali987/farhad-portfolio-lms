import Link from 'next/link';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  lessonsCount?: number;
}

const levelColors: Record<string, string> = {
  BEGINNER: 'bg-green-100 text-green-800',
  INTERMEDIATE: 'bg-yellow-100 text-yellow-800',
  ADVANCED: 'bg-red-100 text-red-800',
};

export default function CourseCard({ id, title, description, level, lessonsCount }: CourseCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[level] || 'bg-gray-100 text-gray-800'}`}>
          {level.toLowerCase()}
        </span>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      {lessonsCount !== undefined && (
        <p className="text-sm text-gray-500 mb-4">{lessonsCount} lessons</p>
      )}
      <Link href={`/courses/${id}`} className="text-primary-600 hover:text-primary-700 font-medium">
        View Course →
      </Link>
    </div>
  );
}
