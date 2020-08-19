import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderJogo from '../Tela-Jogo/components/HeaderJogo';

const Feedback = ({ assertions, score }) => (
  <div>
    <HeaderJogo />
    {assertions < 3 ? (
      <div data-testid="feedback-text">Podia ser melhor...</div>
    ) : (
      <div data-testid="feedback-text">Mandou bem!</div>
    )}
    <div data-testid="feedback-total-question">Você acertou {assertions} questões</div>
    <div data-testid="feedback-total-score">Um total de {score} pontos</div>
    <button type="button" data-testid="btn-play-again">
      Jogar Novamente
    </button>
    <Link to="/ranking">
      <button type="button" data-testid="btn-ranking">
        Ver Ranking
      </button>
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  assertions: state.user.player.assertions,
  score: state.user.player.score,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};