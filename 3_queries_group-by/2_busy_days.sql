SELECT day, count(assignments.*) as total_submissions
FROM assignments
GROUP BY day
HAVING count(assignments.*) >= 10
ORDER BY day;
