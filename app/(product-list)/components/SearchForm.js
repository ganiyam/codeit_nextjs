"use client";
import { useEffect, useState } from "react";
// import Form from "next/form";
import styles from "./SearchForm.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?q=${query}`);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setQuery("");
    }
  }, [pathname]);
  return (
    // <Form action="/search" className={styles.form}>
    //   <input name="q" type="text" placeholder="찾고 싶은 옷을 검색해보세요." className={styles.input} />
    //   <button type="submit" className={styles.button}>
    //     검색
    //   </button>
    // </Form>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="q" type="text" placeholder="찾고 싶은 옷을 검색해보세요." className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" className={styles.button}>
        검색
      </button>
    </form>
  );
}
