import React from 'react'

const HeroForm = () => {
  return (
    <form className='mt-8'>
        <div>
            <label htmlFor="country" className="block text-sm text-start font-medium text-gray-700">
            Get inspired and find your perfect place</label>
            <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-3 block w-full rounded-md border border-gray-300 bg-white py-4 px-3 shadow-sm  focus:outline-none  sm:text-sm"
            >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
            <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-3 block w-full rounded-md border border-gray-300 bg-white py-4 px-3 shadow-sm  focus:outline-none  sm:text-sm"
            >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
            </select>
            <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-dark-blue py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2"
                >
                Search
            </button>
        </div>
    </form>
  )
}

export default HeroForm