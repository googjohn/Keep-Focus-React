export async function notificationRequest() {
  if (!('Notification' in window)) {
    console.log('Browser doesn\'t support notification!')
    return;
  }

  // check notification permission
  if (Notification.permission === 'granted') {
    console.log('Your permission is granted.')
    return;
  } else if (Notification.permission === 'denied') {
    console.log('User needs to manually enable permission.')
    return;
  }

  // request for permission
  try {
    const permissionRequest = await Notification.requestPermission()
    if (permissionRequest === 'granted') {
      console.log('Request granted. You can now send notifications.')
      return;
    } else if (permissionRequest === 'denied') {
      console.log('Request denied. User needs to manually enable to send notifications.')
      return;
    }
  } catch (error) {
    console.error('Error requesting permission.', error)
    return;
  }
}

export function showNotification(selectedMode, breakType) {
  if (Notification.permission === 'granted') {
    let notifTitle = '';
    let notifBody = '';

    if (selectedMode === 'focus-on') {
      notifTitle = 'Time for a break.';
      notifBody = breakType ? 'It\'s time for a long break.' : 'Take a short break.'
    } else {
      notifTitle = 'It\'s time to focus.';
      notifBody = 'Break is over, it\'s time to get back to work.';
    }

    let notifOptions = {
      body: notifBody,
      tag: 'keep-focus-time-end',
      icon: 'https://fav.farm/clock',
      badge: 'https://fav.farm/clock',
      renotify: true,
    };

    const newNotification = new Notification(notifTitle, notifOptions)

    newNotification.onclick = function () {
      window.focus();
      this.close()
    }

    newNotification.onshow = function () {
      console.log('Notification show successfully')
    }

    newNotification.onerror = function (error) {
      console.error('Notification error.', error)
    }
  } else {
    console.log('Permission not granted. ', Notification.requestPermission)
  }
}