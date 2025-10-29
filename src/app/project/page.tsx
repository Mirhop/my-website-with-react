'use client';

import Link from 'next/link';

export default function Project() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Link href="/project/todolist"><h1>To Do List</h1></Link>
    </section>
  );
}