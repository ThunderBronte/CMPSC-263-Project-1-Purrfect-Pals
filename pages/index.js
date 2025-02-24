import Content from "@/components/LandingPage/Content"
import { styled } from 'styled-components'
import NavigationBar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"


export default function Home() {
  return (
    <>
        <NavigationBar />
        <Content text={'Send this to the Hero'} />
        <Content />
        <Footer />
    </>
  )
}
