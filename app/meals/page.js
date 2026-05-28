import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/component/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = async () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{""}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy, fun and
          delicious!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share" className={classes.ctaLink}>
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals.....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
};

export default MealsPage;
