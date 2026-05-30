import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Link to="/blog" className="fixed top-24 left-4 z-40">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft size={20} />
          Back
        </Button>
      </Link>

      <article className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative h-96 rounded-xl overflow-hidden shadow-premium mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="px-4 md:px-0">
          <div className="flex items-center gap-4 mb-6 text-foreground/70">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <div className="flex items-center gap-1 text-sm">
              <Calendar size={16} />
              {post.date}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Clock size={16} />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-foreground/70">Solar Energy Expert</p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{post.content}</p>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
