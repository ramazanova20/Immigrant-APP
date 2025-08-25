import React from 'react'

function Survey() {
  return (
    <div>
        <div className="container lg:max-w-[1280px] mx-auto p-3 flex flex-col justify-center items-center gap-7">
            <h1 className='permanent-marker-regular text-6xl'
            >Survey</h1>
            <p>Please fill out the survey</p>
            <div className='md:text-2xl lg:text-3xl mb-12'>
                <div className='m-auto'>
                    <p className='border-b-2 border-gray-200 font-bold'>1. Are you a foreigner?</p>
                    <form>
                      <div className='flex w-full items-center text-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>                    
                      <input type="radio" id="yes" name="first_answer" value="yes" />
                      <label className='ml-2' htmlFor="yes">Yes</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>            
                      <input type="radio" id="no" name="first_answer" value="no" />
                      <label className='ml-2' htmlFor="no">No</label>
                      </div>
                      
                      <br />
                    </form>
                </div>
                <div>
                    <p className='border-b-2 border-gray-200 font-bold'>2. What is the purpose of your visit?</p>
                    <form>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>                    
                      <input type="radio" id="tourist" name="second_answer" value="tourist" />
                      <label className='ml-2' htmlFor="tourist">Tourist</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>            
                      <input type="radio" id="stay" name="second_answer" value="stay" />
                      <label className='ml-2' htmlFor="stay">I want to stay (e.g. work)</label>
                      </div>
                      
                      <br />
                    </form>
                </div>
                <div>
                    <p className='border-b-2 border-gray-200 font-bold'>3. Number of children:</p>
                    <form>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                      <input type="radio" id="0" name="third_answer" value="0" />
                      <label className='ml-2' htmlFor="0">0</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                      <input type="radio" id="1" name="third_answer" value="1" />
                      <label className='ml-2' htmlFor="1">1</label>
                      </div>
                      
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                      <input type="radio" id="2" name="third_answer" value="2" />
                      <label className='ml-2' htmlFor="2">2</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                      <input type="radio" id="more_than_2" name="third_answer" value="more than 2" />
                      <label className='ml-2' htmlFor="more_than_2">More than 2</label>
                      </div>
                      
                      <br />
                    </form>
                </div>
                <div>
                    <p className='border-b-2 border-gray-200 font-bold'>4. Education:</p>
                    <form>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                     
                      <input type="radio" id="basic" name="fourth_answer" value="basic" />
                      <label className='ml-2' htmlFor="basic">Basic</label>
                      </div>
                
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                  <input type="radio" id="professional" name="fourth_answer" value="professional" />
                      <label className='ml-2' htmlFor="professional">Professional</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
                      <input type="radio" id="medium" name="fourth_answer" value="medium" />
                      <label className='ml-2' htmlFor="medium">Medium</label>
                      </div>

                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>                  
                      <input type="radio" id="bachelor" name="fourth_answer" value="lst degree(bachelor's degree)" />
                      <label className='ml-2' htmlFor="bachelor">lst degree(bachelor's degree)</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>                  
                      <input type="radio" id="master" name="fourth_answer" value="|| degree (master's degree)" />
                      <label className='ml-2' htmlFor="master">|| degree (master's degree)</label>
                      </div>
                        <div className='flex w-full items-center rounded-lg p-2 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>                  
                      <input type="radio" id="doctoral" name="fourth_answer" value="||| degree (doctoral)" />
                      <label className='ml-2' htmlFor="doctoral">||| degree (doctoral)</label>
                      </div>
                      
                      <br />
                      <div className='flex justify-center'>
                        <button className="bg-[#EA613D] text-white px-4 p-2 min-w-[200px] rounded-lg font-bold transition-colors duration-300 hover:bg-[#FF6C01]">
                          <input onClick={() => alert("Survey's submitted successfully!")} type="submit" value="Submit the Survey" />
                        </button>
                      </div>
                    </form>
                </div>
            </div>
                  
        </div>
    </div>
  )
}

export default Survey