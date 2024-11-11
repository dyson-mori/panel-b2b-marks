import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import { useTheme } from 'styled-components';

import { useClickOutside } from '../../hooks/useClickOutside';

import { Container, DropDown } from './styles';

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: 'small' | 'medium' | 'full';
  onChange: (e: any) => void;
  select: {
    id: string;
    label: string;
  }[];
};

export const Select: React.FC<SelectProps> = ({ icon: Icon, width, select, placeholder, onChange, ...rest }) => {
  const theme = useTheme();

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const hideInputRef = useRef<HTMLInputElement>(null);

  const styles: CSSProperties = {
    width: width === 'small' ? 300 : width === 'medium' ? 400 : '100%',
  };

  const filter = select.filter(row => row.label.toLowerCase().includes(search.toLowerCase()));

  useClickOutside(inputRef, () => setShow(false));

  const handleSelect = (label: any) => {
    if (inputRef.current && hideInputRef.current) {
      inputRef.current.value = label;
      hideInputRef.current.value = label;
      hideInputRef.current.dispatchEvent(new Event("change"));
    };

    setShow(false);
  };

  useEffect(() => {
    if (hideInputRef.current) {
      hideInputRef.current.onchange = (e) => onChange(e);
    }
  }, [])

  return (
    <Container style={styles}>
      <span>
        <Icon width={21} height={21} stroke={theme.colors.primary} strokeWidth={2} />
      </span>

      <input
        ref={inputRef}
        placeholder={placeholder ?? 'what?'}
        onFocus={() => setShow(true)}
        onChange={e => setSearch(e.target.value)}
      />

      <input ref={hideInputRef} style={{ display: 'none' }} {...rest} />

      {show && (
        <DropDown style={styles}>
          {filter?.map((row, index) => (
            <button key={index} onClick={(ent) => handleSelect(row.label)}>
              {row.label}
            </button>
          ))}
        </DropDown>
      )}
    </Container>
  )
}