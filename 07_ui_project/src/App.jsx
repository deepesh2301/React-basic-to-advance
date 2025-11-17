import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/Section2/section2'

const App = () => {

  const user = [
    {
    img:'https://images.unsplash.com/photo-1640031203118-c8c971d55862?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para:'Education shapes our thinking, builds confidence, and opens new opportunities. With learning and discipline, we grow stronger and move toward a better future.',
    comment:'Empowerment',
    count:'1'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1664104459360-ffbdab89336e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para:'Learning improves our confidence, sharpens our thinking, and helps us face challenges. Education builds a strong foundation for every dream we choose.',
    comment:'Foundation',
    count:'2'


  },
  {
    img:'https://images.unsplash.com/photo-1706528010331-0f12582db334?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para:'Through education, we discover our abilities, understand our purpose, and build better opportunities. Knowledge becomes a tool for lifelong success and happiness.',
    comment:'Empowerment',
    count:'3'

  },
  {
    img:'https://plus.unsplash.com/premium_photo-1732730224219-5c6d29367590?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para:'Education inspires creativity, strengthens our character, and helps us make wise decisions. With knowledge and hard work, we shape a brighter future',
    comment:'Wisdom',
    count:'4'
  }

]



  return (
    <div>
    <Section1 user={user}/>
    <Section2 />
    </div>
  )
}

export default App