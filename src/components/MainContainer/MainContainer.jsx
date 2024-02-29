import s from "./MainContainer.module.css"

export const MainContainer = ({ children }) => {
  return <main className={s.main}>{children}</main>
}
