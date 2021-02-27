import React from 'react'
import styled from 'styled-components'
import { Image, Button } from '@blackswap/uikit'
import { CommunityTag } from 'components/Tags'
import {useTranslation} from "react-i18next";
import Card from './Card'
import CardTitle from './CardTitle'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  padding: 24px;
`
const Coming: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <div style={{ padding: '24px' }}>
        <CardTitle>
          {t('pool.coming', 'Your Project?')}{' '}
          <span role="img" aria-label="eyes">
            👀
          </span>
        </CardTitle>
        <Image src="/images/bunny-question.svg" width={64} height={64} alt="Your project here" />
        <Balance>???</Balance>
        <Label>{t('pool.coming', 'Create a pool for your token')}</Label>
        <Button
          variant="secondary"
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform"
          external
          fullWidth
          mb="16px"
        >
          {t('pool.coming', 'Apply Now')}
        </Button>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>{t('pool.coming', 'APR')}:</div>
          <Value>??</Value>
        </DetailPlaceholder>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>
            <span role="img" aria-label="syrup">
              🥞{' '}
            </span>
            {t('pool.coming', 'Your Stake')}:
          </div>
          <Value>??? CAKE</Value>
        </DetailPlaceholder>
      </div>
      <Footer>
        <CommunityTag />
      </Footer>
    </Card>
  )
}

export default Coming
