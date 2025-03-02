import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

const services = [
  { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
  { name: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
  { name: 'Desarrollo Móvil', href: '/servicios/desarrollo-movil' },
  { name: 'Soluciones Cloud', href: '/servicios/soluciones-cloud' },
  { name: 'Inteligencia Artificial', href: '/servicios/inteligencia-artificial' },
  { name: 'Landing Pages', href: '/servicios/landing-pages' },
  { name: 'Consultoría Técnica', href: '/servicios/consultoria-tecnica' }
];

export default function ServiceDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200"
        >
          <span>Servicios</span>
          <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute top-full left-0 mt-2 w-64 sm:w-56 origin-top-left rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-700 z-50"
        >
          <div className="py-1">
            {services.map((service) => (
              <Menu.Item key={service.name}>
                {({ active }) => (
                  <a
                    href={service.href}
                    className={`${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
