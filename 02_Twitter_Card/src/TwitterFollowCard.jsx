import { useState } from "react"

export function TwitterFollowCard ({ userName, name, initialIsFollowing }) {
    const [ isFollowing, setFollowing ] = useState( initialIsFollowing )
    
    const handleState = () => setFollowing( !isFollowing )
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={ `https://unavatar.io/${ userName }` }
                    alt="Batman" />
                <div className='tw-followCard-info'>
                    <strong>{ name }</strong>
                    <span className='tw-followCard-infoUserName'>@{ userName }</span>
                </div>
            </header>
            <aside>
                <button className={ buttonClassName } onClick={ handleState }>
                    { text }
                </button>
            </aside>
        </article>
    )
}
