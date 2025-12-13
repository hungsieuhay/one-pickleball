import React from 'react';

import { OCRTableFilter } from '../OCRTableFilter';
import { OCRTierFilter } from '../OCRTierFilter';

// Use function as children component to pass props
const OCRTable = () => {
  return <OCRTierFilter>{(tier) => <OCRTableFilter tier={tier} />}</OCRTierFilter>;
};

export default OCRTable;
