import React from 'react'
import BirthdayCardForm from '../features/GenerateBirthdayCard/BirthdayCardForm'
const CreateBirthdayCard = () => {
  return (
    <section>
      <div className="h-[250px] xl:h-[350px] flex items-end justify-bottom">
        <h2 className="text-5xl my-10 leading-relaxed">Generate your own AI Bithday card🎉 </h2>
      </div>
      <BirthdayCardForm />
    </section>
  )
}

export default CreateBirthdayCard
