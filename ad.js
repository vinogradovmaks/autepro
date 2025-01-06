function filterMark(type, name, role) {
  // Perform filtering logic based on the provided parameters

  // Example filtering logic
  let filteredMarks = [];

  // Assuming you have an array of marks with objects containing type, name, and role properties
  const marks = [
    { type: 'exam', name: 'John', role: 'student', mark: 80 },
    { type: 'quiz', name: 'Jane', role: 'student', mark: 90 },
    { type: 'exam', name: 'Alice', role: 'teacher', mark: 75 },
    { type: 'homework', name: 'Bob', role: 'student', mark: 95 },
  ];

  // Filter marks based on the provided criteria
  filteredMarks = marks.filter(mark => {
    return mark.type === type && mark.name === name && mark.role === role;
  });

  return filteredMarks;
}
