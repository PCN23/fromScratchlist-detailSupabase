
const SUPABASE_URL = 'https://rtlscqxivjinblfrlgls.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0bHNjcXhpdmppbmJsZnJsZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDU0MTMsImV4cCI6MTk2Nzg4MTQxM30.00XIP2vqbUttvWfraYlPerWhL6U91pxWMD114J1FM8I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getStadiums(){
    const resp = await client.from('oregon_stadiums').select('*');
    console.log(resp);
    return resp.data;
}