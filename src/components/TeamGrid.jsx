import React from "react";

const teamMembers = [
  { name: "Team Member 1", role: "Creative Director" },
  { name: "Team Member 2", role: "Art Director" },
  { name: "Team Member 3", role: "Senior Designer" },
  { name: "Team Member 4", role: "UX Designer" },
  { name: "Team Member 5", role: "Motion Designer" },
  { name: "Team Member 6", role: "Strategist" },
  { name: "Team Member 7", role: "Developer" },
  { name: "Team Member 8", role: "Project Manager" },
];

const TeamGrid = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground/10 mb-4 mx-auto flex items-center justify-center text-3xl md:text-4xl font-bold text-primary">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-foreground/70 text-center">
                {member.role}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
