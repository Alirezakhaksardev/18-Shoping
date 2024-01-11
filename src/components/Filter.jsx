import React from 'react'

function Filter({count , sortProducts}) {

    

  return (
    <div className="filter">
        <div className="result">
            تعداد محصولات :{count} محصول
        </div>
        <div className="sort">
            <div className="sort-title"></div>
            <div className="form-checkbox">
                <div className="form-group">
                    <input type="radio" name='sort' id='asc' value="asc" onChange={sortProducts} />
                    <label htmlFor="asc">جدید ترین محصولات</label>
                </div>
                <div className="form-group">
                    <input type="radio" name='sort'id='desc' value='desc' onChange={sortProducts} />
                    <label htmlFor="desc">قدیمی ترین محصولات</label>
                </div>
            </div>
        </div>
        <div className="brand">
            برند ها
            <select name="" id="">
                <option value="">همه</option>
                <option value="">سامسونگ</option>
                <option value="">آیفون</option>
                <option value="">موتورولا</option>
                <option value="">بلک بری</option>
                <option value="">ال جی</option>
                <option value="">سونی</option>
            </select>
        </div>
    </div>
  )
}

export default Filter