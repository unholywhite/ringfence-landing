import * as google from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import isEmpty from 'lodash/isEmpty';
import { NextApiRequest, NextApiResponse } from 'next';

import { ContactInfo } from '@app/types';
import { validateContactInfo } from '@app/utils/validateContactInfo';

const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID || '0';
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

const doc = new GoogleSpreadsheet(
  SPREADSHEET_ID || '',
  new google.JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_SERVICE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = JSON.parse(req.body) as ContactInfo;
    const errors = validateContactInfo(data);

    const { name, title, email, website } = data;

    if (!isEmpty(errors)) {
      throw new Error(JSON.stringify(errors));
    }

    await doc.loadInfo();

    const sheet = doc.sheetsById[parseInt(SHEET_ID)];

    await sheet.addRow({
      Name: name,
      Title: title,
      Email: email,
      Website: website
    });

    res.status(200).json({
      message: 'Data saved successfully'
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
