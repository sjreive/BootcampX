const process = require('process');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: 'vagrant',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(
`SELECT DISTINCT teachers.name as teacher_name, cohorts.name cohort_name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${process.argv[2] || 'JUL02'}'
ORDER BY teachers.name;`
)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort_name}: ${user.teacher_name}`);
    });
  })
  .catch(err => console.error('query error', err.stack));