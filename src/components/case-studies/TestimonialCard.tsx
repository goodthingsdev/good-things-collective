interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

const TestimonialCard = ({ quote, author, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <div className="mb-6">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7V11H9C9 13.2091 10.7909 15 13 15V17C9.68629 17 7 14.3137 7 11V7H11Z" fill="#FF5C35"/>
          <path d="M17 7V11H15C15 13.2091 16.7909 15 19 15V17C15.6863 17 13 14.3137 13 11V7H17Z" fill="#FF5C35"/>
        </svg>
      </div>
      <p className="italic mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm opacity-75">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 