import React from 'react';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';

export const Phonebook = () => {
  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
