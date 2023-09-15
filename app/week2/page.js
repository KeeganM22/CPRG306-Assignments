import StudentInfo from "../studentInfo"
import Link from "next/link"

export default function Shopping() {
    return (
        <>
        <h1> Shopping List </h1>
        <StudentInfo />
        <Link href=".">Week 1</Link>
        </>
    )
}