import { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import Checkbox from '../components/Checkbox';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateInputs = (field, value) => {
    let newErrors = { ...errors };

    if (field === 'email') {
      if (!value) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Invalid email format.';
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'password') {
      if (!value) {
        newErrors.password = 'Password is required.';
      } else if (value.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      } else {
        delete newErrors.password;
      }
    }

    if (field === 'confirmPassword') {
      if (!value) {
        newErrors.confirmPassword = 'Please confirm your password.';
      } else if (value !== password) {
        newErrors.confirmPassword = 'Passwords do not match.';
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  const handleSignUp = () => {
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/screens/AccountVerification');
    }, 2000);
  };

  const isFormValid = email && password && confirmPassword && isChecked && Object.keys(errors).length === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account </Text>
      <Text style={styles.subtitle}>Start renting by creating an account with us</Text>

      <InputField
        label="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(value) => {
          setEmail(value);
          validateInputs('email', value);
        }}
        error={errors.email}
        keyboardType="email-address"
      />

      <InputField
        label="Password"
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          validateInputs('password', value);
        }}
        error={errors.password}
        secureTextEntry
        showToggle
      />

      <InputField
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={(value) => {
          setConfirmPassword(value);
          validateInputs('confirmPassword', value);
        }}
        error={errors.confirmPassword}
        secureTextEntry
        showToggle
      />

      <Checkbox
        label={
          <>
            By continuing you agree with our <Text style={styles.linkText}>Terms of Service and</Text>{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </>
        }
        checked={isChecked}
        onToggle={() => {
          setIsChecked(!isChecked);
          validateInputs('checkbox', !isChecked);
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#E57373" style={styles.loader} />
      ) : (
        <AuthButton title="Sign Up" onPress={handleSignUp} disabled={!isFormValid} />
      )}

      <Text style={styles.orText}>OR</Text>

      <AuthButton title="Sign Up With Google" variant="outline" icon={require('../../assets/images/google.webp')} />
      <AuthButton title="Sign Up With Apple" variant="outline" icon={require('../../assets/images/apple.png')} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => router.replace('/screens/Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#434343',
    textAlign: 'start',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'start',
    marginBottom: 20,
    marginTop: 4,
  },
  orText: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#000000',
    fontSize: 12,
    marginVertical: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#F77A7F',
    fontWeight: '400',
    fontSize: 12,
  },
  footerText: {
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
    fontSize: 12,
  },
  loginLink: {
    color: '#F77A7F',
    fontWeight: '500',
  },
  loader: {
    marginVertical: 20,
  },
});

export default SignUp;
