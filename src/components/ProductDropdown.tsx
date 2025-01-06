import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const products = [
  { name: 'NemcoBot IA', href: '/productos/nemcobot-ia' },
  { name: 'SecureGuard', href: '/productos/secureguard' },
  { name: 'DataInsight', href: '/productos/datainsight' }
];

export default function ProductDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200">
        <span>Productos</span>
        <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-700">
          <div className="py-1">
            {products.map((product) => (
              <Menu.Item key={product.name}>
                {({ active }) => (
                  <a
                    href={product.href}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200`}
                  >
                    {product.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}