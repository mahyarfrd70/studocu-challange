import React from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';

import {HeaderProps} from './Header.type';

const Header = ({onAddNewQuestion, onSort, onRemoveAll}: HeaderProps) => {
  return (
    <div className="shadow sticky top-0 bg-slate-100 z-50" data-testid="header">
      <Container>
        <div className="flex w-full p-1 justify-between children:mr-1 children:normal-case">
          <Button onClick={onAddNewQuestion} buttonTypeClass="btn-success">
            Add question
          </Button>
          <Button onClick={onSort} buttonTypeClass="btn-info">
            Sort questions
          </Button>
          <Button onClick={onRemoveAll} buttonTypeClass="btn-error">
            Remove all
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
