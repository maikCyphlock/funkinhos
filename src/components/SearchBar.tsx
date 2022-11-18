import { ChangeEvent, useState } from 'react'

import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Highlight,
  Hits,
  RefinementList,
  Configure,
  Pagination
} from 'react-instantsearch-hooks-web'

type funko = {
  handle: string
  title: string
  imageName: string
  series: string[]
}

function Hit ({ hit }: { hit: any }) {
  return (
    <article className='border sm:max-w-md h-72 rounded m-4 flex flex-col items-center justify-center gap-2 px-4 py-2'>
      <img
        width={120}
        height={160}
        src={hit.imageName?.replace('www.hobbydb', 'images.hobbydb')}
        alt={hit.title}
      />
      <ul className='flex items-center justify-center flex-wrap gap-2 '>
        {hit.series.map((element: string, key: number) => (
          <li key={key}>
            <small
              className={`bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"`}
            >
              {element}
            </small>
          </li>
        ))}
      </ul>
      <h1>
        <Highlight attribute='title' hit={hit} />
      </h1>
    </article>
  )
}

function SearchBar ({ APP_ID, APP_KEY }: { APP_ID: string; APP_KEY: string }) {
  const searchClient = algoliasearch(APP_ID, APP_KEY)

  return (
    <div
      id='search'
      className='w-full flex flex-col justify-center items-center my-4'
    >
      <InstantSearch
        searchClient={searchClient}
        indexName='funks'
        stalledSearchDelay={500}
      >
        <Configure hitsPerPage={10} />
        <SearchBox
          classNames={{
            root: 'p-3 ',
            form: 'flex justify-center items-center gap-4 ',
            input:
              'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-melrose-500 focus:ring-melrose-500 rounded-md focus:ring-1'
          }}
        />
        <RefinementList attribute='title' />

        <Hits
          classNames={{
            list:
              'w-full auto-rows-max grid grid-cols-1 md:grid-cols-3 md:gap-4'
          }}
          hitComponent={Hit}
        />

        <Pagination
          padding={1}
          classNames={{
            list: 'inline-flex items-center -space-x-px',
            item:
              'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
            firstPageItem:
              'px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
            lastPageItem:
              'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }}
        />
      </InstantSearch>
    </div>
  )
}

export default SearchBar
