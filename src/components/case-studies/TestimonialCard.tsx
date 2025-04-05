"use client";

import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const QuoteIcon = () => (
  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 7V11H9C9 13.2091 10.7909 15 13 15V17C9.68629 17 7 14.3137 7 11V7H11Z"
      className="fill-collective.orange"
    />
    <path
      d="M17 7V11H15C15 13.2091 16.7909 15 19 15V17C15.6863 17 13 14.3137 13 11V7H17Z"
      className="fill-collective.orange"
    />
  </svg>
);

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <div className="border-collective.black/5 rounded-lg border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <QuoteIcon />
      <p className="mt-4 text-lg font-medium">{quote}</p>
      <div className="mt-6">
        <p className="font-bold">{author}</p>
        <p className="text-collective.gray text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
