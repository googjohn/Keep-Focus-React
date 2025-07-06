export function SaveSettings(userSettings) {
  try {
    if (userSettings) {
      const newUserSettings = JSON.stringify(userSettings);
      localStorage.setItem('userSettings', newUserSettings)
    }
  } catch (error) {
    console.error('Error saving user settings', error)
    if (error) {
      localStorage.clear()
      console.log('Local storage cleared.')
    }
  }
}

export function UseSavedSettings(setSettings) {
  const savedUserSettings = localStorage.getItem('userSettings');
  if (savedUserSettings) {
    const parsedSettings = JSON.parse(savedUserSettings)
    setSettings(prevSettings => {
      return { ...prevSettings, ...parsedSettings }
    });
  }
}