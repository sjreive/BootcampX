SELECT AVG(total_duration) as average_total_duration FROM  
  (SELECT cohorts.name as name, SUM(assistance_requests.completed_at - assistance_requests.started_at) as total_duration
  FROM assistance_requests
  JOIN students on students.id = student_id
  JOIN cohorts on cohorts.id = cohort_id
  GROUP BY cohorts.name) as total_durations