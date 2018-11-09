import React from 'react'

import style from '../css/footer.module.css'

export default () => {
  return (
    <div>
      <div className={style.foot}>
        <div>
          <p>Copyright © 2018 Cal Halbert</p>
          <p>
            Created by{' '}
            <a
              className={style.simpleLink}
              href="https://www.linkedin.com/in/ryan-james-80123033/"
            >
              Ryan James
            </a>
          </p>
        </div>
        <a href="#top">Top</a>
      </div>
    </div>
  )
}
