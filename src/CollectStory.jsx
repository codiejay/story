import React, { useState } from 'react';

const CollectStory = () => { 


  const charDetailChange = (e) => { 
    let {name, value} = e.target;
    switch(name) { 
      case 'charName': 
        setcharacter(character => ({ 
          ...character,
          name: value
        }))
        break;

        case 'charAge': 
        setcharacter(character => ({ 
          ...character,
          age: value
        }))
        break;    

        case 'charSex': 
        setcharacter(character => ({ 
          ...character,
          sex: value
        }))
        break;  

        case 'charHistory': 
        setcharacter(character => ({ 
          ...character,
          history: value
        }))
        break;  
    }
  };

  const storyDataChange = (e) => { 
    let value = e.target.value; 
    
    switch(e.target.name) { 
      case 'title': 
        setStoryData(storyData => ({ 
          ...storyData, 
          storyTitle: value
        }));
        break;
      case 'body': 
          setStoryData(storyData => ({ 
            ...storyData, 
            storyBody: value
          }));
    }
  };

  const userSubmittedStory = (e) => { 
    e.preventDefault();

    if(
      storyData.storyBody &&
      storyData.storyTitle
    )
    { 
      setStoryData(storyData => ({ 
        ...storyData,
        storyTitle: '',
        storyBody: '',
        character: [],
      }));
      setstories(stories.concat(storyData));
    }

    else { 
      alert('please add a title and body to your story')
    }
  } 

  const addNewCharacter = (e) => { 
    e.preventDefault();

    if( 
      character.name &&
      character.age &&
      character.sex &&
      character.history
    ){
      setcharacter(character => ({ 
        ...character,
        sex: '',
        history: '',
        age: '',
        name: ''
      }));
      setStoryData(storyData => ({ 
        ...storyData,
        character: [...storyData.character, character]
      }))
    }
  }

  //usestates
  let [storyData, setStoryData] = useState({ 
    storyTitle: '',
    storyBody: '',
    character: [],
  });

  let [character, setcharacter] = useState({ 
    name: '',
    age: '',
    history: '',
    sex: ''
  });

  let [stories, setstories] = useState([]);

  return ( 
    <div> 
      <h1> {storyData.storyTitle}</h1>
      <p>{storyData.storyBody}</p>
      { 
        storyData.character.map(item => { 
          return (
            <div 
              style={{ 
                backgroundColor: "whitesmoke",
                width: '30%',
                margin: '0 auto',
                textAlign: 'left'
              }}
            >
              <h3>{item.name}</h3>
              <p>age: {item.age} </p>
              <p>history: {item.history}</p>
              <p>sex: {item.sex}</p>
            </div>
          )
        })  
      }
      <form 
       onSubmit={userSubmittedStory}
      >
        <input 
          type='text'
          name='title'
          placeholder='story Title'
          onChange={storyDataChange}
          value={storyData.storyTitle}
        />
        <textarea 
          type='text'
          name='body'
          placeholder='story body'
          onChange={storyDataChange}
          value={storyData.storyBody}
        />
        <h4> Add Characters: </h4>
        <form 
          style={{background: 'whitesmoke'}}
          onSubmit={addNewCharacter}
          >
            <input 
              onChange={charDetailChange} 
              name='charName' 
              type="text" 
              placeholder='name'
              value={character.name}
            />
            <input 
              onChange={charDetailChange} 
              name='charAge' 
              type="number" 
              placeholder='age'
              value={character.age}
            />
            <input 
              onChange={charDetailChange} 
              name='charSex' 
              type="text" 
              placeholder='sex'
              value={character.sex}
              />
            <input 
              onChange={charDetailChange} 
              name='charHistory' 
              type="text" 
              placeholder='history'
              value={character.history}
            />
            <a
              href='#'
              onClick={addNewCharacter}
            > 
              make character
            </a>
          </form>
        <button>
          Submit Story
        </button>
      </form>


      <div>
        { 
          stories.map(item => { 
            return ( 
              <div style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'left',
                width: '40%'
              }}>
                <h1>
                  {item.storyTitle}
                </h1>
                <p>
                  {item.storyBody}
                </p>
                { 
                  item.character.map(item => { 
                    return ( 
                      <div style={{border: '1px solid white', margin: '2em 0', width: '40%'}}>
                        <h3> {item.name}</h3>
                        <p> {item.age} </p>
                        <p> {item.sex} </p>
                        <p> {item.history} </p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CollectStory;