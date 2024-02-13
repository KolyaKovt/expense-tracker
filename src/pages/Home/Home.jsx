import ExpensesMain from "@/components/ExpensesCategories/ExpensesMain"
import welocomeStyles from "../WelcomePage/WelcomePage.module.css"
import homeStyles from "./Home.module.css"
import { ExpensesAndIncomes } from "@/components/ExpensesAndIncomes/ExpensesAndIncomes"
import { useParams } from "react-router-dom"

const Home = () => {
  const { transactionsType } = useParams()
  
  return (
    <div className={homeStyles.contianer}>
      <div className={homeStyles.leftColumn}>
        <section className={homeStyles.hero}>
          <h1 className={welocomeStyles.mainTitle}>
            {transactionsType === "expenses" ? "Expense" : "Incomes"} Log
          </h1>
          <p className={welocomeStyles.mainDescription}>
            {transactionsType === "expenses"
              ? "  Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips."
              : "Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap."}
          </p>
        </section>
        <section>
          <h2 className='visually-hidden'>Incomes and expenses</h2>
          <ExpensesAndIncomes />
        </section>
        <section className={homeStyles.mobileForm}>
          the expenses incomes form
        </section>
        <section>
          <ExpensesMain />
        </section>
      </div>
      <section>the expenses incomes form</section>
    </div>
  )
}

export default Home
