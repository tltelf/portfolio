import { useEffect, useState, useCallback } from 'react'
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types';

type FormValues = {
  senderEmail?: string;
  message?: string;
}

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const {ref, inView} = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  }
}

export function useForm() {
  const [values, setValues] = useState<FormValues>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  };

  const resetForm = useCallback(
    (newValues = {}) => {
      setValues(newValues);
    },
    [setValues]
  );

  return {
    values,
    handleChange,
    resetForm,
  }
}