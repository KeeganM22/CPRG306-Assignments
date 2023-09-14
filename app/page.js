import Link from 'next/link.js';
import StudentInfo from './studentInfo';

export default function Home() {
  return (
    <>
        <StudentInfo />
        <Link href="\week2">Shopping List</Link>
        <h2> {Add(2, 3)}</h2>
    </>
  );
}

function Add(x, y) {
  return (x+y);
}
