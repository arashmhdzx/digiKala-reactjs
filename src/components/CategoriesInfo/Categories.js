import React from 'react'
import CategoriesInfoCart from '../cart/categoriesInfoCart/categoriesInfoCart'

import './style.css'

const Categories = ({ ctgData }) => {
    return (
        <div className="categories--js">
            <div className="categories--title">بیش از ۴،۰۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف</div>
            <CategoriesInfoCart data={ctgData} />
        </div>
    )
}

export default Categories
