import React from 'react'

function Videos() {

    const maindiv = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '20px',
        padding: '20px',
        flexWrap: 'wrap',
        marginTop: '-15px'
        // position: 'relative'
    }

    const image = {
        // position: 'absolute',
        width: '100%',
        borderRadius: '10px'
    }

    const position = {
        width: '100%',
        height: '20px',
        marginTop: '-18px',
        backgroundColor: 'grey',
        borderRadius: '8px'
    }

    const position1 = {
        width: '70%',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '8px'
    }

  return (
    <div style={maindiv}>
        <div>
            <img style={image} src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
        <div>
            <img style={image}  src="https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80" alt="" />
            <div style={position}>
                <div style={position1}></div>
            </div>
            <h3>CSS Variables | Toggle to the Dark Mode Using CSS Vairiables | Re....</h3>
            <p style={{color: 'grey',fontSize: '0.8rem',marginTop: '-8px'}}>1.7K Views 2 days ago</p>
        </div>
    </div>
  )
}

export default Videos