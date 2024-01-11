import React from 'react'

function Filter({count , sortProducts , filterProducts , brand}) {

    

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
            <select name="FilterBrand" id="FilterBrand" value={brand} onChange={filterProducts}>
                <option value="">همه</option>
                <option value="samsung">سامسونگ</option>
                <option value="iphone">آیفون</option>
                <option value="motorola">موتورولا</option>
                <option value="blackbery">بلک بری</option>
                <option value="lg">ال جی</option>
                <option value="sony">سونی</option>
            </select>
        </div>
    </div>
  )
}

export default Filter