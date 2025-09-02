import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Cybersecurity Practices for Small Businesses',
      excerpt: 'Learn the fundamental security measures every small business should implement to protect against cyber threats and data breaches.',
      category: 'Cybersecurity',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Security', 'Business', 'Best Practices']
    },
    {
      id: 2,
      title: 'Modern Frontend Development: React Best Practices',
      excerpt: 'Discover the latest React patterns and techniques for building scalable, maintainable web applications in 2024.',
      category: 'Web Development',
      date: '2024-01-10',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: 'Design Systems: Creating Consistent Brand Experiences',
      excerpt: 'How to build and maintain a comprehensive design system that ensures consistency across all your digital touchpoints.',
      category: 'Design',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Design Systems', 'Branding', 'UI/UX']
    },
    {
      id: 4,
      title: 'Data Management Tools for Enhanced Productivity',
      excerpt: 'Explore powerful tools and techniques for efficient data entry, organization, and management in modern workflows.',
      category: 'Productivity',
      date: '2024-01-01',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Data Management', 'Productivity', 'Tools']
    }
  ];

  // const formatDate = (dateString) => {
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };
  const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };

  return new Date(dateString).toLocaleDateString(undefined, options);
};


  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
    Insights
  </span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, security, design, and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-1">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(blogPosts[0].date)}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {blogPosts[0].tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Regular Posts */}
          <div className="space-y-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <Clock className="w-3 h-3 ml-4 mr-1" />
                      {post.readTime}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;