import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  const [showCalendar, setShowCalendar] = useState(true);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <View style={{ flex: 1 }}>
      <Switch value={showCalendar} onValueChange={toggleCalendar} />
      {showCalendar && <Calendar />}
    </View>
  );
};

export default MyCalendar;
