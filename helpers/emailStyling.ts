const main = {
  backgroundColor: '#F5F5F5',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: 'black',
}

const paragraph = {
  fontSize: 16,
}

const logo = {
  padding: '30px 20px',
  background: '#000000',
}

const buttonContainer = {
  textAlign: 'center' as const,
}

const button = {
  backgroundColor: '#ED2224',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  display: 'inline-block',
  padding: '12px 30px',
  textDecoration: 'none',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const image = {
  maxWidth: '100%',
}

const boxInfos = {
  padding: '20px',
}

const containerImageFooter = {
  padding: '20px',
  backgroundColor: '#000000'
}

function formatClass(classTime?: string, removeClass?: boolean): string {
  if (!classTime) return ''
  return `${removeClass ? '' : 'Class'}: ${new Date(
    classTime
  ).toLocaleDateString('en-GB', {
    weekday: 'long', // Full weekday (e.g., Monday)
    year: 'numeric', // Full year (e.g., 2024)
    month: 'long', // Full month (e.g., October)
    day: 'numeric', // Day of the month (e.g., 26)
  })} at ${new Date(classTime).toLocaleTimeString('en-GB', {
    hour: '2-digit', // 2-digit hour (e.g., 11)
    minute: '2-digit', // 2-digit minute (e.g., 15)
    hour12: true, // 12-hour format with AM/PM
  })}`
}

export {
  main,
  paragraph,
  logo,
  content,
  containerImageFooter,
  boxInfos,
  image,
  button,
  buttonContainer,
  formatClass
}